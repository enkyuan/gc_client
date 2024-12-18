// TODO: password confirm function in useAuth hook

import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CaretLeft } from "phosphor-react-native";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";

export default function SignupScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 0.8 * insets.top;
  const paddingBottom = insets.bottom;

  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center"
      >
        <View className="mx-[4%]">
          <TouchableOpacity
            onPress={() => navigation.pop()}
            className="bg-gray-200 rounded-full justify-center items-center h-12 w-12"
          >
            <CaretLeft size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: insets.top }}>
          <View className="items-center mt-[4%] mb-[8%]">
            <ThemedText type="title" className="justify-center">
              Sign up with Email
            </ThemedText>
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Email</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input
              type="lg"
              placeholder="name@address.com"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Password</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input
              type="lg"
              placeholder="your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Confirm Password</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input
              type="lg"
              placeholder="retype password"
              secureTextEntry={true}
              onChangeText={(text) => setPasswordConfirm(text)}
            />
          </View>

          <View
            className="mx-[6%] mt-[32%]"
            style={{ paddingBottom: paddingBottom }}
          >
            <Button
              type="full"
              text="Continue"
              textStyle={{ color: "white", textAlign: "center" }}
              className="bg-black border-1 rounded-full justify-center items-center"
              onPress={() => {
                const formData = {
                  email: email,
                  password: password,
                  passwordConfirm: passwordConfirm,
                };

                console.log(formData);

                auth.handleSignUp(formData);
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}