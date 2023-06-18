import React from "react";
import { Flex, Text, Icon, FlexProps } from "@chakra-ui/react";
import { BiCoin } from "react-icons/bi";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IconType } from "react-icons";

interface StatusBarProps extends FlexProps {
  list: {
    language: string;
    streak: Number;
    coins: Number;
    experience: Number;
  };
}

interface StatusItemProps {
  name: string;
  icon: IconType;
  value: string;
}

const StatusItems: Array<StatusItemProps> = [
  { name: "language", icon: GrLanguage, value: "Spanish" },
  { name: "streak", icon: AiFillThunderbolt, value: "0" },
  { name: "coins", icon: BiCoin, value: "0" },
  { name: "experience", icon: AiFillStar, value: "0" },
];

const StatusBar = ({ list }: StatusBarProps) => {
  return (
    <Flex
      border="1px"
      borderRadius="md"
      alignItems="center"
      justifyContent="space-between"
      p="4"
      w="sm"
    >
      {StatusItems.map((status) => {
        return (
          <Flex alignItems="center">
            <Icon key={status.name} mr="2" fontSize="20" as={status.icon} />
            <Text>{status.value}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default StatusBar;
