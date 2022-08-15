import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("calls api and render the list of shows", async () => {
    let wrapper = shallowMount(SearchBar, {
      data() {
        return {
          searchTerm: "as",
        };
      },
    });
    const fetchMovieSpy = jest.spyOn(SearchBar.methods, "fetchMovieList");
    wrapper.find("input").trigger("keyup.enter");
    await SearchBar.methods.fetchMovieList();
    expect(fetchMovieSpy).toHaveBeenCalledTimes(1);
  });
});
