import { WorkoutType } from "../../types";
import { useForm, SubmitHandler } from "react-hook-form";

type WorkoutModalType = {
  exercises?: WorkoutType["exercises"];
  modalMyProgress: boolean;
  handleSetModalMyProgress: () => void;
  handleSetProgressIsSave: (data: Inputs) => void;
};

export type Inputs = Record<string, number>;

export default function ModalProgress({
  exercises,
  modalMyProgress,
  handleSetModalMyProgress,
  handleSetProgressIsSave,
}: WorkoutModalType) {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <>
      {modalMyProgress && (
        <div
          onClick={handleSetModalMyProgress}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
        >
          <form
            onSubmit={handleSubmit(handleSetProgressIsSave)}
            className="bg-white p-10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-normal mb-12">Мой прогресс</h2>
            <div className="flex flex-col gap-5 mb-9 pr-5 h-80 w-w340px overflow-auto">
              {exercises?.map((el) => {
                const inputProps = register(el.id, {});
                return (
                  <div key={el.name} className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">{el.name}</span>
                    <input
                      className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                      {...inputProps}
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              // onClick={handleSetProgressIsSave}
              className="w-full bg-lime-400 py-4 font-normal rounded-full"
            >
              Сохранить
            </button>
          </form>
        </div>
      )}
    </>
  );
}
