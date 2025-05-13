import TabletSpecs from './TabletSpecs'
import LaptopSpecs from './LaptopSpecs'
import TVSpecs from './TVSpecs'
import SmartphoneSpecs from './SmartphoneSpecs'

interface TechSpecsProps {
	selectedCategory: string
}

const TechSpecs: React.FC<TechSpecsProps> = ({ selectedCategory }) => {
	if (selectedCategory == 'laptop') return <LaptopSpecs />
	else if (selectedCategory == 'smartphone') return <SmartphoneSpecs />
	else if (selectedCategory == 'tablet') return <TabletSpecs />
	else if (selectedCategory == 'tv') return <TVSpecs />
}

export default TechSpecs
