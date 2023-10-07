import SanityCommon from './Base/SanityCommon'

interface Social extends SanityCommon {
    _type: 'social'
    title: string
    url: string
}

export default Social
