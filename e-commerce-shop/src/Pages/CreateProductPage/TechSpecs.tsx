import TabletSpecs from './TabletSpecsComp'
import LaptopSpecsComp from './LaptopSpecsComp'
import TVSpecs from './TVSpecsComp'
import SmartphoneSpecs from './SmartphoneSpecsComp'

interface TechSpecsProps {
	selectedCategory: string
}

const TechSpecs: React.FC<TechSpecsProps> = ({ selectedCategory }) => {
	if (selectedCategory == 'laptop') return <LaptopSpecsComp />
	else if (selectedCategory == 'smartphone') return <SmartphoneSpecs />
	else if (selectedCategory == 'tablet') return <TabletSpecs />
	else if (selectedCategory == 'tv') return <TVSpecs />
}

export default TechSpecs
