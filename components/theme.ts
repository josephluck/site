export const symbols = {
  font: {
    base: "16px",
    _10: {
      size: rem(10),
      lineHeight: rem(13)
    },
    _12: {
      size: rem(12),
      lineHeight: rem(15)
    },
    _14: {
      size: rem(14),
      lineHeight: rem(17)
    },
    _16: {
      size: rem(16),
      lineHeight: rem(19)
    },
    _18: {
      size: rem(18),
      lineHeight: rem(21)
    },
    _24: {
      size: rem(24),
      lineHeight: rem(28)
    },
    _26: {
      size: rem(26),
      lineHeight: rem(30)
    }
  },
  fontWeight: {
    _300: "300",
    _400: "400",
    _500: "500",
    _600: "600",
    bold: "bold"
  },
  color: {
    text: "#373B3F",
    link: "#2C92DD",
    linkHover: "#2A59B9",
    linkTertiary: "#BAC5CB",
    border: "#BAC5CB"
  },
  spacing: {
    _16: rem(16)
  },
  transition: {
    standard: "all 200ms ease"
  }
};

function rem(val: number) {
  return `${val / 16}rem`;
}
