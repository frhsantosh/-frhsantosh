import React, { useState, useCallback, useRef } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import { Upload, Crop, Maximize, Sliders, Download, Trash2, Check, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ImageEditorProps {
  onBack?: () => void;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({ onBack }) => {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [filter, setFilter] = useState<'none' | 'grayscale' | 'sepia'>('none');
  const [isEditing, setIsEditing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImage(reader.result as string);
        setIsEditing(true);
        setProcessedImage(null);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    currentFilter: string
  ): Promise<string | null> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return null;

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Apply filter
    if (currentFilter === 'grayscale') {
      ctx.filter = 'grayscale(100%)';
    } else if (currentFilter === 'sepia') {
      ctx.filter = 'sepia(100%)';
    }

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL('image/jpeg');
  };

  const handleSave = async () => {
    if (image && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels, filter);
        setProcessedImage(croppedImage);
        setIsEditing(false);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.download = 'edited-image.jpg';
      link.href = processedImage;
      link.click();
    }
  };

  const reset = () => {
    setImage(null);
    setProcessedImage(null);
    setIsEditing(false);
    setFilter('none');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-surface-container transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-3xl font-headline font-bold text-on-surface">Image Editor</h1>
        </div>
        {processedImage && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-medium editorial-shadow hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        )}
      </div>

      {!image && !processedImage && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest rounded-3xl p-12 border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Upload className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold">Upload an image</h3>
            <p className="text-on-surface-variant">Support for JPG, PNG and WebP</p>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-primary text-on-primary px-8 py-3 rounded-2xl font-bold editorial-shadow hover:opacity-90 transition-opacity"
          >
            Select File
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />
        </motion.div>
      )}

      {image && isEditing && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="relative h-[400px] bg-on-surface rounded-3xl overflow-hidden">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 editorial-shadow space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-2">
                  <Maximize className="w-4 h-4" /> Zoom
                </span>
                <span className="text-xs text-on-surface-variant font-mono">
                  {Math.round(zoom * 100)}%
                </span>
              </div>
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-4">
              <span className="text-sm font-bold flex items-center gap-2">
                <Sliders className="w-4 h-4" /> Filters
              </span>
              <div className="grid grid-cols-3 gap-3">
                {(['none', 'grayscale', 'sepia'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`py-3 rounded-xl text-sm font-medium capitalize transition-all ${
                      filter === f 
                        ? 'bg-primary text-on-primary shadow-lg' 
                        : 'bg-surface-container hover:bg-outline-variant text-on-surface'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold bg-secondary text-on-primary editorial-shadow hover:opacity-90 transition-opacity"
              >
                <Check className="w-4 h-4" /> Apply Changes
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {processedImage && !isEditing && (
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <div className="bg-surface-container-lowest rounded-3xl p-8 editorial-shadow flex flex-col items-center space-y-6">
            <div className="relative group">
              <img 
                src={processedImage} 
                alt="Processed" 
                className="max-w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-black px-4 py-2 rounded-xl font-bold flex items-center gap-2"
                >
                  <Crop className="w-4 h-4" /> Edit Again
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 w-full max-w-md">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold bg-surface-container text-on-surface hover:bg-outline-variant transition-colors"
              >
                <ImageIcon className="w-5 h-5" /> New Image
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
