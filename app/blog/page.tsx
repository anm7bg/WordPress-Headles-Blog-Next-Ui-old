import Link from 'next/link';



// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getPosts } from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { blogCard } from '@/lib/interface';

const BlogPage = async () => {
	const posts: blogCard[] = await getPosts();

	// console.log("Posts")
	// console.log(posts)

	return (
        // <p>Loading</p>
		<div className="blog-page">
            <h1>Авто новини</h1>
			<div className="posts">
				{posts.map((post: any, idx: number) => {
                    // console.log("Post")
                    // console.log(post)
					return (
						<Card className='mb-[20px]' key={idx}>
                            <Image 
                                src={post.featuredImage.node.sourceUrl} 
                                alt="image" 
                                width={600} 
                                height={400}
                                className='rounded-t-lg object-cover'
                            />
                            <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                                <h2 className='blog-post-title text-center text-lg line-clamp-2'>{post.title}</h2>
                            </CardHeader>
                            <CardBody className='p-[5px]'>
                                <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
                            </CardBody>
                            <CardFooter>
                                <Button className='w-full mt7'>
                                    <Link href={`${post.slug}`}>Виж</Link>
                                </Button>
                            </CardFooter>
                        </Card>
					);
				})}
			</div>
            <p>Потопете в света на автомобилите с Автопрес БГ!</p>
            <p>Категорията Авто новини включва актуални информации и новини свързани с автомобилната индустрия. Тук ще намерите различни статии, които обхващат нови модели коли, технологични постижения, тестове на автомобили, сравнения между различни марки и модели, както и различни съвети и трикове за поддръжка на автомобили. В категорията Авто новини ще откриете интересни и полезни статии за всички автомобилни ентусиасти, независимо дали търсите информация за новите тенденции в автомобилната индустрия или просто искате да подобрите знанията си за автомобилите и тяхното поддръжане.</p>
            <p>Не пропускайте да разгледате най-новите статии в категорията и да останете в крак с тенденциите в автомобилния свят.</p>
			<p>Очаквайте вълнуващи новини, полезни съвети и ексклузивно съдържание, което ще обогати знанията ви и ще ви вдъхнови.</p>
		</div>
	);
};

export default BlogPage;