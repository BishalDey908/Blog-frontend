import BlogCard from "../Components/BlogCard";
import Slider from "../Components/Slider";
import CardImg1 from "../assets/img/photo-1665686440627-936e9700a100.jpg"
import CardImg2 from "../assets/img/photo-1513436539083-9d2127e742f1.jpg"
import FeaturedSection from "../Components/FeaturedSection";


const Home = () => {
  return (
    <div className="z-5">
      
        <Slider />
        <div className="flex justify-between pt-4 xl:gap-8">
        
        <div className=" ">
        <BlogCard img={CardImg1} catagory="Nature" hearder="Autumn is a second spring when every leaf is a flower" body ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit odio deserunt, sint quis reprehenderit nostrum repellat blanditiis repellendus quod voluptates ex minus a dolorum vel incidunt molestiae dignissimos qui. Recusandae assumenda id dignissimos cum iusto aperiam animi doloremque nihil fuga quos nemo consequuntur alias eum et totam aspernatur, obcaecati quia? Ipsam aut maxime temporibus. Eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione aut omnis. Esse error eaque doloribus laborum cupiditate cum consectetur blanditiis sed placeat laboriosam dolorem obcaecati molestiae deserunt aperiam unde, sint at suscipit autem assumenda illum optio similique aut? Vero recusandae nostrum tenetur, accusantium nihil impedit amet inventore quo assumenda sapiente expedita porro cupiditate dolorum." date="May 2, 2022"/>
        <BlogCard img={CardImg2} catagory="Travel" hearder="Never let your memories be greater than your dreams" body="Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The.." date="May 2, 2022"/>
        <BlogCard img={CardImg1} catagory="Nature" hearder="Autumn is a second spring when every leaf is a flower" body ="She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise.." date="May 2, 2022"/>
        <BlogCard img={CardImg2} catagory="Travel" hearder="Never let your memories be greater than your dreams" body="Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The.." date="May 2, 2022"/>
        </div>
         
        <div className="2xl:block xl:block lg:block md:hidden hidden">
        <FeaturedSection/>
        </div>
        </div>
        
    </div>
  );
};

export default Home;
