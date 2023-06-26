import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/system';
import { HeroSection } from '@/components/common/home';
import RecentPosts from '@/components/common/home/recent-posts';
import FeatureWork from '@/components/common/home/featured-works';

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts/>
			<FeatureWork/>
		</Box>
	);
};

Home.Layout = MainLayout;
export default Home;
