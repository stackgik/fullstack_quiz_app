import QuestionTile from './QuestionTile';

const quesCats = ['html', 'css', 'js', 'reactjs'];

const QuestionCategories = () => {
  return (
    <section>
      <ul className='grid gap-6'>
        {quesCats.map(el => (
          <QuestionTile label={el} key={el} />
        ))}
      </ul>
    </section>
  );
};

export default QuestionCategories;
