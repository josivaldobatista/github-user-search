import React from "react"
import ContentLoader from "react-content-loader"

const SearchCardLoader = () => (
    <ContentLoader
        speed={2}
        width={870}
        height={260}
        viewBox="0 0 870 260"
        backgroundColor="#dedede"
        foregroundColor="#f5f5f5"
    >
        <rect x="-30" y="23" rx="8" ry="8" width="860" height="260" />
    </ContentLoader>
)

export default SearchCardLoader