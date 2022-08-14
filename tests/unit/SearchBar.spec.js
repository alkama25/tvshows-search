import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("renders a list of shows", async () => {
    let wrapper = shallowMount(SearchBar);
    const fetchMovieSpy = jest.spyOn(SearchBar.methods, "fetchMovieList");
    const result = await SearchBar.methods.fetchMovieList("as");
    await wrapper.vm.$nextTick(() => {
      expect(fetchMovieSpy).toHaveBeenCalledTimes(1);
    });
  });
});