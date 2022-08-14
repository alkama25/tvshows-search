import { shallowMount } from "@vue/test-utils";
import ShowsList from "@/components/ShowsList.vue";
import { shows } from "./data/shows";

const propsData = {
  movieListRecords: shows,
  searchTerm: "as",
};

describe("ShowsList.vue", () => {
  it("Should redirect to show by clicking on image", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData,
    });

    let link = wrapper.find("a");
    expect(link.attributes().href).toBe(`http://www.hbo.com/girls`);
  });

  it("Should show image", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData,
    });

    let image = wrapper.find("img");
    expect(image.attributes().src).toBe(
      `https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg`
    );
  });

  it("Should display name and language of the show", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData,
    });

    let name = wrapper.find("p");
    expect(name.text()).toBe("Girls, English");
  });

  it("Should display no result found message if search results are empty", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData: {
        movieListRecords: [],
        searchTerm: "as",
      },
    });

    let noResultMessage = wrapper.findComponent({ ref: "no-results" });
    expect(noResultMessage.text()).toBe("No results found. Please try again");
  });

  it("do not render grids if there are no shows in the array", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData: {
        movieListRecords: [],
        searchTerm: "as",
      },
    });

    let gridContainer = wrapper.find('[class="grid-container"]');
    expect(wrapper.findComponent(gridContainer).exists()).toBe(false);
  });

  it("Show search message on initial load", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData: {
        movieListRecords: [],
        searchTerm: "",
      },
    });

    let defaultMessage = wrapper.find("h1");
    expect(defaultMessage.text()).toBe("Discover TV Shows and search by name");
  });

  it("Show load more button when show list length is greater than 12", () => {
    const wrapper = shallowMount(ShowsList, {
      propsData,
    });

    let defaultMessage = wrapper.find("button");
    expect(wrapper.findComponent(defaultMessage).exists()).toBe(false);
  });

  it("It should render only 12 elements in shows array at once", () => {
    const result = ShowsList.computed.moviesToShow.call(propsData);
    const expectedLength = 12;

    expect(result.length).toBeLessThanOrEqual(expectedLength);
  });
});
