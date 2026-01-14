import Hero from "../components/Overlay/Hero";

const Home = ({ theme }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Hero theme={theme} />
        </div>
    );
};

export default Home;
