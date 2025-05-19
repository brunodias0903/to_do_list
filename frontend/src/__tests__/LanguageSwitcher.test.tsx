import LanguageSwitcher from "@/components/LanguageSwitcher";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const mockChangeLanguage = vi.fn();
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: "en",
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe("LanguageSwitcher Component", () => {
  it("renders language options correctly", () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText("language:")).toBeInTheDocument();
    expect(screen.getByText("english")).toBeInTheDocument();
    expect(screen.getByText("portuguese")).toBeInTheDocument();
  });

  it("calls changeLanguage when English button is clicked", () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText("english"));

    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("calls changeLanguage when Portuguese button is clicked", () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText("portuguese"));

    expect(mockChangeLanguage).toHaveBeenCalledWith("pt-BR");
  });
});
