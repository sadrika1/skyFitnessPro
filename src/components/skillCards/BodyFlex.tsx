export default function BodyFlex() {
  return (
    <>
      <div className="h-79 flex flex-row justify-between rounded-lg  bg-custom-purple">
        <div className="mt-10 ml-10">
          <p className="text-white text-6xl font-medium leading-16">
            Бодифлекс
          </p>
        </div>
        <img
          className="rounded-lg"
          src="/images/bodyflex.png"
          alt="course_picture"
          width="779px"
          height="310px"
        />
      </div>
    </>
  );
}
