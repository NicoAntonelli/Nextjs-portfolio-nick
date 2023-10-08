import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '../env'

import SanityImage from '@/entities/Base/SanityImage'

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

export const urlForImage = (source: Image | SanityImage) => {
    return imageBuilder?.image(source).auto('format').fit('max')
}
