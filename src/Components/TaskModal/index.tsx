import React from "react";
import { useDispatch } from "react-redux";

import FakeInput from "Components/FakeInput";
import Modal from "Components/Modal";

import { useGlobalState } from "Redux/state";
import { useTasks } from "Redux/task";

const TaskModal: React.FC = () => {
  const GlobalState = useGlobalState();
  const dispatch = useDispatch();
  const tasks = useTasks();

  if (!GlobalState.panel || !GlobalState.taskID) return <></>;

  return (
    <Modal
      isOpen={GlobalState.modalOpen}
      aria-label="tasks"
      size="lg"
      onClose={() =>
        dispatch({
          type: "state/MODAL",
          open: false,
        })
      }
      header={() => (
        <FakeInput
          disabled={GlobalState.panel?.taskFieldDisplay === "id"}
          value={
            tasks[GlobalState.taskID as string][
              GlobalState.panel?.taskFieldDisplay || "title"
            ]
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
          }}
        />
      )}
    ></Modal>
  );
};

export default TaskModal;
