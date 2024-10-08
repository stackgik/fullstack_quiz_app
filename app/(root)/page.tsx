import QuestionCategories from '@/components/QuestionCategories';

const HomePage = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <section className='grid gap-12 self-start'>
        <h1 className='text-6xl leading-[5rem]'>
          Welcome to the <br /> <strong>Geeks Quiz!</strong>
        </h1>
        <p>Pick a subject and get started</p>
      </section>

      <QuestionCategories />
    </div>
  );
};

export default HomePage;
