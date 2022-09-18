import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FlexBox } from "../../presentational/Wrap";
import { ISlotItem, ISlotList } from "../../interface/Drag";

interface IIndex {
  dragId: number;
  todo: ISlotItem;
  index: number;
  deleteTodo: (todoId: number) => void;
}

export default function DragItem(props: IIndex) {
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 10,
    margin: `5px 0px`,
    background: isDragging ? "#CDF0EA" : "#AAC4FF",
    // change background colour if dragging
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Draggable
      draggableId={props.todo.id.toString()}
      index={props.index}
      key={props.todo.dropId}
    >
      {(provided, snapshot) => (
        <>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <FlexBox style={{ justifyContent: "space-between" }}>
              <div>{props.todo.context}</div>
              <img
                onClick={() => props.deleteTodo(props.todo.id)}
                style={{ cursor: "pointer" }}
                src="/imgs/delete.svg"
              ></img>
            </FlexBox>
          </div>
        </>
      )}
    </Draggable>
  );
}
