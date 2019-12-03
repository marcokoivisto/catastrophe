import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Switch } from "react-native";
import { utilities } from "../constants/Layout";
import { useHistory } from "react-router-native";
import Spacing from "../components/Spacing";
import Button from "../components/Button";
import { toggleSounds } from "../utils/sound";
import storage from "../utils/storage";
import colors from "../constants/Colors";

export default Settings = () => {
  const { container, contentCenter, headline, textCenter, text } = utilities;
  const history = useHistory();
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const fetchStorage = async () => {
      setMuted(await storage.get("is_muted"));
    };
    fetchStorage();
  }, [muted]);

  return (
    <View style={[container, contentCenter]}>
      <SafeAreaView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={[headline, textCenter]}>Settings</Text>
          <Spacing height={30} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={text}>Music and game sounds</Text>
            <Spacing height={5} width={20} />
            <Switch
              thumbColor={{ true: colors.pink, false: colors.white }}
              trackColor={{ true: colors.pink }}
              value={!muted}
              onValueChange={async value => {
                await storage.set("is_muted", !value);
                await toggleSounds(!value);
                setMuted(!value);
              }}
            />
          </View>
          <Spacing height={60} />
          <Button
            flexGrow={false}
            title="go back"
            onPress={() => history.push("/")}
            backgroundColor="#d4d5cf"
            block
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
