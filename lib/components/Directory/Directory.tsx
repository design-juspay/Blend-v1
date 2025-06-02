"use client";

import type React from "react";
import { createRef, useEffect, useRef } from "react";
import { DirectoryProps } from "./types";
import Section from "./Section";
import Block from "../Primitives/Block/Block";
import styled from "styled-components";

const StyledNav = styled(Block)`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Directory = ({ directoryData, className }: DirectoryProps) => {
  const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([]);

  useEffect(() => {
    sectionRefs.current = directoryData.map(() =>
      createRef<HTMLDivElement | null>()
    );
  }, [directoryData]);

  const handleSectionNavigation = (
    direction: "up" | "down",
    currentIndex: number
  ) => {
    const nextIndex =
      direction === "up"
        ? Math.max(0, currentIndex - 1)
        : Math.min(directoryData.length - 1, currentIndex + 1);

    if (nextIndex !== currentIndex) {
      const nextSection = document.querySelectorAll("[data-state]")[nextIndex];
      const headerToFocus = nextSection?.querySelector(
        '[role="button"]'
      ) as HTMLElement;

      if (headerToFocus) {
        headerToFocus.focus();
      }
    }
  };

  return (
    <StyledNav
      as="nav"
      width="100%"
      height="100%"
      flexGrow={1}
      display="flex"
      flexDirection="column"
      gap="16px"
      alignItems="center"
      overflow="auto"
      paddingY="16px"
      className={className}
      aria-label="Directory navigation"
    >
      {directoryData.map((section, sectionIndex) => (
        <Section
          key={sectionIndex}
          section={section}
          sectionIndex={sectionIndex}
          onNavigateBetweenSections={handleSectionNavigation}
        />
      ))}
    </StyledNav>
  );
};

Directory.displayName = "Directory";

export default Directory;
