// TODO: add 3rd-party auth options

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter, Link } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import useSignUp from "@/hooks/useSignUp";

export default function SignUpOptions() {
  const router = useRouter();
  const setIsSignUp = useSignUp((state) => state.setIsSignUp);
  const isSignUp = useSignUp((state) => state.isSignUp);

  return (
    <>
      <View style={tw`py-16`}>
        <View style={tw`my-8`}>          
            <Text style={styles.title}>Let's get started</Text>
        </View>
        <View style={tw`flex flex-col justify-center items-center`}>
          <Pressable
            style={styles.pressable}
            onPress={() => router.navigate("/signup/")}
          >
            <Envelope size={32} color="black" style={styles.envelope} />
            <Text style={styles.text}>Email</Text>
          </Pressable>
          <GoogleAuthProvider />
          <View style={tw`py-2`}>
            <Text style={tw`text-xl font-semibold`}>
              Already have an account?{" "}
              <Link
                href="/login_options/"
                style={tw`text-blue-500`}>              
                Log in
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    color: "black",
  },  
  text: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
  pressable: {
    backgroundColor: "white",
    marginVertical: 8,
    width: "92%",
    height: 88,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
  },
  envelope: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  }
});