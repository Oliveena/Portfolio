import React, { useState } from "react";
import { Container, Typography, Box, Grid, Card, CardMedia, Modal, IconButton } from "@mui/material";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const walrusPaintingsData = [
  { id: 1, image: "walrus_progress/20250102_173417.jpg", date: "2025-01-02", phaseKey: "phase1" },
  { id: 2, image: "walrus_progress/20250102_182141.jpg", date: "2025-01-02", phaseKey: "phase2" },
  { id: 3, image: "walrus_progress/20250102_193255.jpg", date: "2025-01-02", phaseKey: "phase3" },
  { id: 4, image: "walrus_progress/20250102_194414.jpg", date: "2025-01-02", phaseKey: "phase4" },
  { id: 5, image: "walrus_progress/20250102_200253.jpg", date: "2025-01-02", phaseKey: "phase5" },
  { id: 6, image: "walrus_progress/20250102_201236.jpg", date: "2025-01-02", phaseKey: "phase6" },
  { id: 7, image: "walrus_progress/20250108_221350.jpg", date: "2025-01-08", phaseKey: "complete" },
];

export default function WalrusGallery() {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build paintings array with translated descriptions
  const walrusPaintings = walrusPaintingsData.map((p, idx) => ({
    ...p,
    title: `${t("gallery.title")} - ${idx + 1}`,
    description: t(`gallery.phases.${p.phaseKey}`),
    date: new Date(p.date).toLocaleDateString(i18n.language === "ru" ? "ru-RU" : i18n.language === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

  const handleImageClick = (painting, index) => {
    setSelectedImage(painting);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % walrusPaintings.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(walrusPaintings[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + walrusPaintings.length) % walrusPaintings.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(walrusPaintings[prevIndex]);
  };

  return (
    <Container sx={{ py: 8, minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          🦭 {t("gallery.title")}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          {t("gallery.subtitle")}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
          {t("gallery.description")}
        </Typography>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {walrusPaintings.map((painting, index) => (
          <Grid item xs={12} sm={6} md={4} key={painting.id}>
            <Card
              sx={{
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "10%",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
              onClick={() => handleImageClick(painting, index)}
            >
              <CardMedia
                component="img"
                image={`/images/${painting.image}`}
                alt={painting.title}
                sx={{
                  height: 300,
                  objectFit: "cover",
                  borderRadius: "10% 10% 0 0",
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {painting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {painting.date}
                </Typography>
                <Typography variant="body2">
                  {painting.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
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
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: -50,
                  right: 0,
                  color: "white",
                  zIndex: 2,
                }}
              >
                <FaTimes size={30} />
              </IconButton>

              {/* Previous Button */}
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: "absolute",
                  left: -60,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <FaChevronLeft size={40} />
              </IconButton>

              {/* Image */}
              <Box
                component="img"
                src={`/images/${selectedImage.image}`}
                alt={selectedImage.title}
                sx={{
                  maxWidth: "100%",
                  borderRadius: "3%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />

              {/* Next Button */}
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: -60,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <FaChevronRight size={40} />
              </IconButton>

              {/* Image Info */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -80,
                  left: 0,
                  right: 0,
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">{selectedImage.title}</Typography>
                <Typography variant="body2" color="grey.400">
                  {selectedImage.description} • {selectedImage.date}
                </Typography>
                <Typography variant="caption" color="grey.500">
                  {currentIndex + 1} / {walrusPaintings.length}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Artist Statement */}
      <Box sx={{ mt: 8, textAlign: "center", maxWidth: 700, mx: "auto" }}>
        <Typography variant="h4" gutterBottom>
          {t("gallery.about_title")}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {t("gallery.about_text")}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
          "{t("gallery.quote")}"
        </Typography>
      </Box>
    </Container>
  );
}
