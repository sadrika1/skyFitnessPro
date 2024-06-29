export default function Yoga() {
  return (
    <>
      <div className="laptop h-79 flex flex-row justify-between rounded-lg  bg-custom-yellow">
        <div className="mt-10 ml-10">
          <p className="text-white text-6xl font-medium leading-16">Йога</p>
        </div>
        <img
          className="rounded-lg"
          src="/images/yoga.png"
          alt="course_picture"
        />
      </div>
      
      <div className="mobile">
        <img
          className="rounded-lg"
          src="/images/yoga_full.png"
          alt="course_picture"
          // width="343px"
          // height="389px"
        />
        </div>
    </>
  );
}
