import { shallowMount } from "@vue/test-utils";
import  ShowsList  from "@/ShowsList.vue";
import { shows } from "./data/shows";

const propsData = {
  shows,
};

// describe("ShowsList", () => {
//   it("Should redirect to show link by clicking on image", () => {
//     const wrapper = shallowMount(ShowsList, { propsData });
//     const link = wrapper.find("a");
//     expect(link.attributes().href).toBe(`${shows.show.officialSite}`);
//   });
// });
