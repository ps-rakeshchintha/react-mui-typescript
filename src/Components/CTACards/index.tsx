import { Box } from "@mui/material"
import React from "react"
import CTACard from "./CTACard"

const CTACardsContent = ["COVID-19 FAQs AND UPDATES", "PODCAST: EMPOWERING NEW NURSES", "SUPPORT YOUR WELL-BEING"]
export default () => {
    return (
        <Box display="flex" gap={2} flexDirection="row" sx={{
            overflow: "auto"
        }}>
            {CTACardsContent.map((content, index) => (
                <CTACard key={index} content={content} />
            ))}
        </Box>
    )
}