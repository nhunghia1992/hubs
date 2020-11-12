import React from "react";
import { Column } from "../layout/Column";
import { RoomLayout } from "../layout/RoomLayout";
import { Modal } from "./Modal";

export default {
  title: "Modal"
};

export const Base = () => (
  <RoomLayout
    modal={
      <Modal title="Modal">
        <Column padding>Test</Column>
      </Modal>
    }
  />
);

Base.parameters = {
  layout: "fullscreen"
};