import AuthorBio from '@site/src/components/AuthorBio';
import ArticleComingSoon from '@site/src/components/ArticleComingSoon'
import BrowserWindow from '@site/src/components/BrowserWindow'
import CurrentNodeVersion from '@site/src/components/CurrentNodeVersion'
import DependencyTypeDescription from '@site/src/components/DependencyTypeDescription'
import Figure from '@site/src/components/Figure'
import NpmLink from '@site/src/components/NpmLink'
import SupportedNodeVersions from '@site/src/components/SupportedNodeVersions'
import SemanticVersionRangeDescription from '@site/src/components/SemanticVersionRangeDescription'
import CodeBlock from '@theme/CodeBlock';
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
    CurrentNodeVersion,
    CodeBlock,
    DependencyTypeDescription,
    Image,
    NpmLink,
    Tabs,
    TabItem,
    SemanticVersionRangeDescription,
    SupportedNodeVersions,
    Figure
}
