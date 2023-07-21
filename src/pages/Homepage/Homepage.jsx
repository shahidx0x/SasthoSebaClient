import { Carosule } from "../../components/Carosule/Carosule";
import { Contact } from "../../components/Contact/Contact";
import CTA from "../../components/CTA/CTA";
import DoCTA from "../../components/CTA/DoCTA";
import MainHero from "../../components/MainHero/MainHero";



export const Homepage = () => {
  return (
    <>
     
      <MainHero/>
      <CTA/>
      <DoCTA/>
      <Contact />
  
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">An user successfully logout</h3>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              OK
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
