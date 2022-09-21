import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragItem from "./DragItem";
import { FlexBox } from "../../presentational/Wrap";
import { ISlotItem, ISlotList } from "../../interface/Drag";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../states/tokenState";

const Input = styled.input`
  padding: 10px;
  width: 200px;
  height: 40px;
`;

function DragMain() {
  const token = useRecoilValue(tokenState);
  const [todo, setTodo] = useState("");
  const arr = ["todo", "done"];
  const [userItem, setUserItem] = useState<ISlotItem>({
    id: 0,
    context: "",
    dropId: arr[0],
    isDone: false,
  });

  useEffect(() => {
    console.log(token);
  }, [token]);

  const [userList, setUserList] = useState<ISlotList>({
    userItems: [userItem],
  });

  const onUserList = useCallback(() => {
    setUserList({
      userItems: [...userList.userItems, userItem],
    });
  }, [userItem]);

  useEffect(() => {
    onUserList();
    console.log(userList);
  }, [onUserList]);

  let [idCnt, setIdCnt] = useState(0);

  const addTodo = (context: string) => {
    if (!context) {
      alert("할일을 입력해주세요");
      return;
    }
    setIdCnt((idCnt += 1));
    setUserItem({ id: idCnt, context, dropId: "todo", isDone: false });
    console.log(userItem);
  };

  const deleteTodo = (todoId: number) => {
    let copyUserItems = userList.userItems;
    let idx = copyUserItems.findIndex((v) => v.id === todoId);
    copyUserItems.splice(idx, 1);
    setUserList({
      userItems: [...copyUserItems],
    });
  };

  const resultUserDatas: any = (dropId: string) => {
    return userList?.userItems.map((todo, idx) => {
      console.log(todo.dropId);
      if (todo.dropId === dropId && todo.context)
        return (
          <DragItem
            dragId={todo.id}
            todo={todo}
            index={idx}
            deleteTodo={deleteTodo}
          ></DragItem>
        );
      else return <></>;
    });
  };

  const onDragEnd = (result: any) => {
    console.log(result);
    // dropped outside the list(리스트 밖으로 드랍한 경우)
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;

    let items = [...userList.userItems];
    let index;
    if (source.droppableId !== destination.droppableId) {
      index = items.findIndex((v) => v.id === parseInt(result.draggableId));
      let findObj = items[index];
      findObj.dropId = destination.droppableId;
      items.splice(index, 1);
      items = [...items, findObj];
      setUserList({
        userItems: items,
      });
    } else {
      if (source.index !== destination.index) {
        let selectItem = items[result.source.index];
        items.splice(result.source.index, 1);
        items.splice(destination.index, 0, selectItem);
        setUserList({
          userItems: items,
        });
      }
    }
  };

  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "#EEF1FF" : "#B1B2FF",
    padding: 10,
    width: 250,
    height: 250,
    marginRight: 10,
  });

  const showListInfo = (dragIndex: string) => {
    let selectInfo = userList.userItems.filter(
      (v) => v.dropId === dragIndex && v.context
    );
    let result: string[] = [];
    console.log(selectInfo);
    for (let i = 0; i < selectInfo.length; i++) {
      result = [...result, JSON.stringify(selectInfo[i])];
    }
    alert(result);
  };

  return (
    <>
      {token ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            {arr.map((v, idx) => {
              return (
                <>
                  <div
                    key={idx}
                    style={{ display: "flex", flexDirection: "column", gap: 5 }}
                  >
                    <h1 style={{ textAlign: "center" }}>{v}</h1>
                    {v === "todo" ? (
                      <FlexBox
                        style={{
                          justifyContent: "space-between",
                          padding: "0px 5px",
                        }}
                      >
                        <Input onChange={(e) => setTodo(e.target.value)} />
                        <img
                          onClick={(e) => addTodo(todo)}
                          style={{ cursor: "pointer" }}
                          src="/imgs/add_box.svg"
                        ></img>
                      </FlexBox>
                    ) : (
                      <div style={{ height: 48 }}></div>
                    )}

                    <Droppable droppableId={v} key={v}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                          className={v}
                        >
                          {resultUserDatas(v)}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <button
                      onClick={(e) => {
                        showListInfo(v);
                      }}
                    >
                      정보
                    </button>
                  </div>
                </>
              );
            })}
          </DragDropContext>
        </div>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </>
  );
}

export default DragMain;
