import TwoColumn from '@site/src/components/TwoColumn';
import useBaseUrl from '@docusaurus/useBaseUrl';
import VideoGallery from '@site/src/components/VideoGallery';


# Robot painting
<TwoColumn>
<div>
<img src={useBaseUrl('/img/tab1.jpg')} alt="Collage" />
</div>
<img src={useBaseUrl('/img/collage.jpg')} alt="Collage" />
</TwoColumn>

<VideoGallery
  videos={[
    {
      src: useBaseUrl('/videos/penplotter.mp4'),
      title: 'Workshop Example 1'
    },

  ]}
/>



| ![Image 1](images/cracks1.jpg) | ![Image 2](images/cracks2.jpg) | ![Image 3](images/cracks3.jpg) |
|----------------------------|----------------------------|----------------------------|