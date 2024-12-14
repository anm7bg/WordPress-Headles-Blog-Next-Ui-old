import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авто новини | Потопете в света на автомобилите с Автопрес БГ!",
  description: "Категорията Авто новини включва актуални информации и новини свързани с автомобилната индустрия. Тук ще намерите различни статии, които обхващат ...",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}
