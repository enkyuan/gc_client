// TODO: route login/signup screen to here & add 3rd-party auth options

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import useStore from "../../hooks/useStore";

const Options = (selection: string) => {
  const router = useRouter();
  const setIsSignUp = useStore((state) => state.setIsSignUp);
  const isSignUp = useStore((state) => state.isSignUp);

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row justify-center items-center mt-16 mb-8`}>
          <Text style={styles.title}>Continue with</Text>
        </View>
        <Pressable
          style={styles.pressable}
          onPress={() => router.navigate("/auth/SignUp")}
        >
          <Envelope size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Email</Text>
        </Pressable>
        <GoogleAuthProvider /> 
        <Text style={tw`text-lg font-semibold`}>
          Already have an account?{" "}
          <Text
            style={tw`text-blue-500`}
            onPress={() => router.navigate("/auth/Login")}>
            Log in
          </Text>
        </Text>
        <Pressable
          style={tw`flex-row bg-blue-300 py-6 w-11/12 h-20 rounded-full my-70`}
          onPress={() => {
              router.navigate("/auth")
              setIsSignUp(!isSignUp);

              console.log("isSignUp", isSignUp);
            }
          }
        >
          <CaretLeft size={32} color="white" style={styles.caretLeft} />
          <Text style={tw`text-white text-2xl font-semibold`}>Back to options</Text>
        </Pressable> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  pressable: {
    backgroundColor: "white",
    marginVertical: 8,
    width: "92%",
    height: 100,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  caretLeft: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  },
});

export default Options;
