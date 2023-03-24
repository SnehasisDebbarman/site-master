import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import { VictoryPie } from "victory-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import InfoCard from "../Components/InfoCard";
import FloatingActionBtn from "../Components/FloatingActionBtn";
const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];

export default function TaskPage({ navigation }) {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Tasks" navigation={navigation} navigationActive={true} />
      <ScrollView className="p-5 pb-20">
        <View className="w-full flex flex-row">
          <InfoCard title={"Site Overview"} content={2012} />
          <InfoCard title={"Total Task"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Total Site"} content={1214} />
        </View>
        <View className="mx-5">
          <VictoryPie
            colorScale={["#A4ACF3", "#FFBD1D", "gold", "cyan", "navy"]}
            cornerRadius={5}
            width={320}
            data={[
              { x: "Pending Task", y: 25 },
              { x: "Completed Tasks", y: 120 },
            ]}
            innerRadius={60}
            padAngle={1}
          />
        </View>
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Tasks</Text>
          <Text>Details</Text>
        </View>
        <View>
          <View className="flex flex-row py-5 gap-2 justify-between">
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="border-2 border-gray-200 w-2/5 p-2 rounded-lg flex-row"
            >
              <AntDesign name="calendar" size={16} color="gray" />
              <Text className="pl-2 text-gray-600">
                {moment(StartDate).format("Do MMM, YYYY")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="border-2 border-gray-200 w-2/5 p-2 rounded-lg flex-row"
            >
              <AntDesign name="calendar" size={16} color="gray" />
              <Text className="pl-2 text-gray-600">
                {moment(EndDate).format("Do MMM, YYYY")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex gap-5">
          {data.map((it, key) => {
            return (
              <View
                key={key}
                className="border border-gray-200 p-4 rounded-lg shadow-lg "
              >
                <View className="flex-row justify-between items-center pb-2">
                  <Text className="text-xl font-bold">Cement Delivery</Text>
                  <TouchableOpacity className="p-2 px-3 bg-yellow-400 rounded flex-row">
                    <FontAwesome name="edit" size={16} color="black" />
                    <Text className="pl-1 text-xs text-center">Edit </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-1 items-center">
                    <AntDesign name="idcard" size={16} color="gray" />
                    <Text className="text-xs">Pintu Das</Text>
                  </View>
                  <View className="flex-row gap-1 items-center">
                    <AntDesign name="calendar" size={16} color="gray" />
                    <Text className="text-xs">23rd Mar, 2023</Text>
                  </View>

                  <TouchableOpacity className="p-1 px-2 bg-green-200 border-2 border-green-400 rounded">
                    <Text className="text-[6px] text-center">
                      Avg. Priority{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View className="p-5" style={styles.modalView}>
            <CalendarPicker width={300} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FloatingActionBtn
        text="Add Task"
        Icon={<AntDesign name="plus" size={16} color="black" />}
      />

      {/* <TouchableOpacity className="flex-row items-center absolute bg-yellow-400 bottom-5 right-5 px-3 py-2 shadow rounded-md">
       
        <Text className="ml-2 text-xs font-bold">Add Task</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginHorizontal: 10,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
