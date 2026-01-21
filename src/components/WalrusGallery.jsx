import React, { useState } from "react";
import { Container, Typography, Box, Modal, IconButton } from "@mui/material";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Progress images for the walrus painting process (carousel)
const walrusProgressData = [
  { id: 1, image: "walrus_progress/20250102_173417.jpg", phaseKey: "phase1" },
  { id: 2, image: "walrus_progress/20250102_182141.jpg", phaseKey: "phase2" },
  { id: 3, image: "walrus_progress/20250102_193255.jpg", phaseKey: "phase3" },
  { id: 4, image: "walrus_progress/20250102_194414.jpg", phaseKey: "phase4" },
  { id: 5, image: "walrus_progress/20250102_200253.jpg", phaseKey: "phase5" },
  { id: 6, image: "walrus_progress/20250102_201236.jpg", phaseKey: "phase6" },
  { id: 7, image: "walrus_progress/20250108_221350.jpg", phaseKey: "complete" },
];

// Finished paintings collection
const paintingsData = [
  { id: 1, image: "paintings/IMG_20210217_090313_884.jpg", title: "Walrus with a Pearl Earring", original: "After Vermeer" },
  { id: 2, image: "paintings/IMG_20210131_221746_948.jpg", title: "Walrus Crossing the Alps", original: "After Jacques-Louis David" },
  { id: 3, image: "paintings/20250111_095825.jpg", title: "Mona Walrus", original: "After Da Vinci" },
  { id: 4, image: "paintings/20250111_100242.jpg", title: "The Son of Walrus", original: "After Magritte" },
  { id: 5, image: "paintings/IMG_20210208_090255_351.jpg", title: "Royal Walrus", original: "After historical portraits" },
];

export default function WalrusGallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePaintingClick = (painting) => {
    setSelectedImage(painting);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + walrusProgressData.length) % walrusProgressData.length);
  };

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev + 1) % walrusProgressData.length);
  };

  return (
    <Box
      className="gallery-page"
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        // Override the parent gradient background
        margin: "-2rem",
        padding: "2rem",
        width: "calc(100% + 4rem)",
      }}
    >
      {/* Header */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            textAlign: "center",
            color: "#1a1a1a",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {t("gallery.title")}
        </Typography>
        <Box sx={{ width: 60, height: 1, backgroundColor: "#1a1a1a", mx: "auto", mb: 2 }} />
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#666",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          {t("gallery.description")}
        </Typography>
      </Container>

      {/* Walrus Progress Carousel Section */}
      <Box sx={{ backgroundColor: "#fafafa", py: 6 }}>
        <Container maxWidth="md">
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              textAlign: "center",
              color: "#1a1a1a",
              mb: 4,
              letterSpacing: "0.1em",
            }}
          >
            {t("gallery.subtitle")}
          </Typography>

          {/* Carousel */}
          <Box sx={{ position: "relative", maxWidth: 500, mx: "auto" }}>
            <Box
              component="img"
              src={`/images/${walrusProgressData[carouselIndex].image}`}
              alt={t(`gallery.phases.${walrusProgressData[carouselIndex].phaseKey}`)}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />

            {/* Carousel Controls */}
            <IconButton
              onClick={handleCarouselPrev}
              sx={{
                position: "absolute",
                left: -50,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1a1a1a",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
              }}
            >
              <FaChevronLeft size={24} />
            </IconButton>
            <IconButton
              onClick={handleCarouselNext}
              sx={{
                position: "absolute",
                right: -50,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1a1a1a",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
              }}
            >
              <FaChevronRight size={24} />
            </IconButton>

            {/* Progress Indicator */}
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="body2" sx={{ color: "#666", fontFamily: "'Cormorant Garamond', serif" }}>
                {t(`gallery.phases.${walrusProgressData[carouselIndex].phaseKey}`)}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
                {walrusProgressData.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: idx === carouselIndex ? "#1a1a1a" : "#ccc",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Paintings Grid - Ellen Von Wiegand Style */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            textAlign: "center",
            color: "#1a1a1a",
            mb: 6,
            letterSpacing: "0.1em",
          }}
        >
          {t("gallery.about_title")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
            gap: 6,
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {paintingsData.map((painting) => (
            <Box
              key={painting.id}
              onClick={() => handlePaintingClick(painting)}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                transition: "transform 0.3s ease",
                backgroundColor: "#fff",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                component="img"
                src={`/images/${painting.image}`}
                alt={painting.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  backgroundColor: "#fff",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  mt: 2,
                  fontSize: "1.1rem",
                }}
              >
                {painting.title}
              </Typography>
              <Box sx={{ width: 30, height: 1, backgroundColor: "#1a1a1a", mx: "auto", my: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#888",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                {painting.original}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Quote Section */}
      <Box sx={{ backgroundColor: "#fafafa", py: 6 }}>
        <Container maxWidth="sm">
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
            }}
          >
            "{t("gallery.quote")}"
          </Typography>
        </Container>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {selectedImage && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: -50,
                  right: 0,
                  color: "#1a1a1a",
                }}
              >
                <FaTimes size={24} />
              </IconButton>

              <Box
                component="img"
                src={`/images/${selectedImage.image}`}
                alt={selectedImage.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                }}
              />

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1a1a1a",
                  }}
                >
                  {selectedImage.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#888",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    mt: 1,
                  }}
                >
                  {selectedImage.original}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
