import React, { useEffect, useCallback } from "react";

export interface ImageViewerProps {
  /** Array of image URLs or image objects */
  images: string[];
  /** Current image index to display. Pass `null` or `-1` when modal is closed. */
  currentIndex: number;
  /** Controls visibility of the modal */
  isOpen: boolean;
  /** Callback fired when closing the modal */
  onClose: () => void;
  /** Callback fired when index changes (next / prev) */
  onIndexChange: (newIndex: number) => void;
  /** Optional alt text array matching the `images` length */
  alts?: string[];
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
  alts = [],
}) => {
  const totalImages = images.length;

  const handleNext = useCallback(() => {
    if (totalImages === 0) return;
    onIndexChange((currentIndex + 1) % totalImages);
  }, [currentIndex, totalImages, onIndexChange]);

  const handlePrev = useCallback(() => {
    if (totalImages === 0) return;
    onIndexChange((currentIndex - 1 + totalImages) % totalImages);
  }, [currentIndex, totalImages, onIndexChange]);

  // Handle keyboard navigation (Escape, Left Arrow, Right Arrow)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling when modal is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (
    !isOpen ||
    totalImages === 0 ||
    currentIndex < 0 ||
    currentIndex >= totalImages
  ) {
    return null;
  }

  const currentSrc = images[currentIndex];
  const currentAlt = alts[currentIndex] ?? `Screenshot ${currentIndex + 1}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div
        className="relative mx-4 flex max-h-[90vh] w-full max-w-7xl flex-col items-center justify-center p-2 select-none sm:p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inner content
      >
        {/* Top Bar: Counter & Close Button */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
          <span className="rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-neutral-300 backdrop-blur-md sm:text-sm">
            {currentIndex + 1} / {totalImages}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/80 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Close image viewer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Previous Button */}
        {totalImages > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/80 transition-colors hover:bg-black/80 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Previous image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Main Image View */}
        <div className="relative flex max-h-[80vh] max-w-full items-center justify-center overflow-hidden rounded-lg shadow-2xl">
          <img
            src={currentSrc}
            alt={currentAlt}
            className="max-h-[80vh] max-w-full rounded-lg object-contain transition-transform duration-200"
          />
        </div>

        {/* Next Button */}
        {totalImages > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/80 transition-colors hover:bg-black/80 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Next image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
