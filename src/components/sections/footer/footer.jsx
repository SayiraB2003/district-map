import { Footer, FooterBottom } from "@/components/ui/footer";

export default function FooterSection() {
  return (
    <>
      <footer className="w-full px-4 bg-gray-900">
        <div className="mx-auto max-w-container">
          <Footer className="pt-1 bg-gray-900">
            <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row text-gray-400">
              <div>The website's map contains public sector information courtesy of the Ministry of Housing, Communities & Local Government, licensed under the Open Government Licence v3.0.<br/>
              This website is a project under Aston University.</div>
              <div className="flex items-center gap-4">
                <p>Sayira Begum | 220208996</p>
                <br/><br/><br/>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </>
  );
}