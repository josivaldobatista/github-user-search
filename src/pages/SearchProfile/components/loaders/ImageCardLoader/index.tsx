import React from "react"
import ContentLoader from "react-content-loader"

const ImageCardLoader = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 350 460"
        backgroundColor="#dedede"
        foregroundColor="#f5f5f5"
    >
        <rect x="20" y="23" rx="8" ry="8" width="284" height="284" />
        <rect x="20" y="319" rx="8" ry="8" width="153" height="36" />
    </ContentLoader>
)

export default ImageCardLoader