import AuthorBio from '@site/src/components/AuthorBio';
import ArticleComingSoon from '@site/src/components/ArticleComingSoon'
import BrowserWindow from '@site/src/components/BrowserWindow'
import Figure from '@site/src/components/Figure'
import Image from '@theme/IdealImage';
import MDXComponents from '@theme-original/MDXComponents'
import TabItem from '@theme-original/TabItem'
import Tabs from '@theme-original/Tabs'

export default {
    // Re-use the default mapping
    ...MDXComponents,
    AuthorBio,
    ArticleComingSoon,
    BrowserWindow,
    Image,
    Tabs,
    TabItem,
    Figure
}
