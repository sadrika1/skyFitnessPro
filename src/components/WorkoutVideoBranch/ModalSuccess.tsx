type WorkoutModalSaveProgressType = {
  progressIsSave: boolean;
  handleHideModals: () => void;
};

export default function ModalSuccess({
  progressIsSave,
  handleHideModals,
}: WorkoutModalSaveProgressType) {
  return (
    <>
      {progressIsSave && (
        <div
          onClick={handleHideModals}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
        >
          <div
            className="bg-white p-10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl w-80 text-center mb-8">
                Ваш прогресс засчитан!
              </h1>
              <img
                className="w-16 h-16"
                src="/images/progressDone.png"
                alt="progressDone"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
