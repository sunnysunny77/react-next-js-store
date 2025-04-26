"use server"

const fields_options = (data) => {

  const options = data.options;

  const footer = options.footer;

  const phone = footer.phone;

  const paragraph = footer.paragraph;

  const linked_in = footer.linkedin;

  const address = footer.address;

  const navigation = options.navigation;

  const sign_out = navigation.signOut;

  const sign_in = navigation.signIn;

  const front_page = navigation.frontPage;

  const cart_page = navigation.cartPage;

  const logo = options.logo?.node.sourceUrl;

  const logo_alt = options.logo?.node.altText;

  return {
    options: {
      phone: phone, 
      paragraph: paragraph, 
      linked_in: linked_in, 
      address: address, 
      sign_out: sign_out, 
      sign_in: sign_in, 
      front_page: front_page, 
      cart_page: cart_page,
      logo: logo,
      logo_alt: logo_alt,
    },
  };
};

const fields_front = (data) => {

  const page = data.frontPage;

  const title = page.title;

  const header = page.header;

  const header_paragraph = header.paragraph;

  const header_first_carousel = header.firstCarousel?.node.sourceUrl;

  const header_first_carousel_alt = header.firstCarousel?.node.altText;

  const header_second_carousel = header.secondCarousel?.node.sourceUrl;

  const header_second_carousel_alt = header.secondCarousel?.node.altText;

  const header_third_carousel = header.thirdCarousel?.node.sourceUrl;

  const header_third_carousel_alt = header.thirdCarousel?.node.altText;

  const introduction = page.introduction;

  const introduction_heading = introduction.heading;

  const introduction_paragraph = introduction.paragraph;

  const sub_introduction = page.subIntroduction;

  const sub_introduction_heading = sub_introduction.heading;

  const sub_introduction_paragraph = sub_introduction.paragraph;

  const sub_introduction_image = sub_introduction.image?.node.sourceUrl;

  const sub_introduction_image_alt = sub_introduction.image?.node.altText;

  const table_feature = page.tableFeature;

  const table_feature_heading = table_feature.heading;

  const table_feature_sub_heading = table_feature.subHeading;

  const table_feature_image = table_feature.image?.node.sourceUrl;

  const table_feature_image_alt = table_feature.image?.node.altText;

  const table_feature_paragraph = table_feature.paragraph;

  const table_feature_firstColumn = table_feature.firstColumn;

  const table_feature_firstColumn_heading = table_feature_firstColumn.heading;

  const table_feature_firstColumn_firstRow = table_feature_firstColumn.firstRow;

  const table_feature_firstColumn_secondRow = table_feature_firstColumn.secondRow;

  const table_feature_firstColumn_thirdRow = table_feature_firstColumn.thirdRow;

  const table_feature_firstColumn_fourthRow = table_feature_firstColumn.fourthRow;

  const table_feature_secondColumn = table_feature.secondColumn;

  const table_feature_secondColumn_heading = table_feature_secondColumn.heading;

  const table_feature_secondColumn_firstRow = table_feature_secondColumn.firstRow;

  const table_feature_secondColumn_secondRow = table_feature_secondColumn.secondRow;

  const table_feature_secondColumn_thirdRow = table_feature_secondColumn.thirdRow;

  const table_feature_secondColumn_fourthRow = table_feature_secondColumn.fourthRow;

  const table_feature_thirdColumn = table_feature.thirdColumn;

  const table_feature_thirdColumn_heading = table_feature_thirdColumn.heading;

  const table_feature_thirdColumn_firstRow = table_feature_thirdColumn.firstRow;

  const table_feature_thirdColumn_secondRow = table_feature_thirdColumn.secondRow;

  const table_feature_thirdColumn_thirdRow = table_feature_thirdColumn.thirdRow;

  const table_feature_thirdColumn_fourthRow = table_feature_thirdColumn.fourthRow;

  const table_feature_firstTag = table_feature.tags.firstTag;

  const table_feature_firstTag_super_tag = table_feature_firstTag.superTag;

  const table_feature_firstTag_sub_tag = table_feature_firstTag.subTag;

  const table_feature_secondTag = table_feature.tags.secondTag;

  const table_feature_secondTag_super_tag = table_feature_secondTag.superTag;

  const table_feature_secondTag_sub_tag = table_feature_secondTag.subTag;

  const table_feature_thirdTag = table_feature.tags.thirdTag;

  const table_feature_thirdTag_super_tag = table_feature_thirdTag.superTag;

  const table_feature_thirdTag_sub_tag = table_feature_thirdTag.subTag;

  const slider = page.slider;

  const slider_paragraph = slider.paragraph;

  const slider_first_image = slider.firstImage?.node.sourceUrl;

  const slider_first_image_alt = slider.firstImage?.node.altText;

  const slider_second_image = slider.secondImage?.node.sourceUrl;
  
  const slider_second_image_alt = slider.secondImage?.node.altText;

  const slider_third_image = slider.thirdImage?.node.sourceUrl;
  
  const slider_third_image_alt = slider.thirdImage?.node.altText;

  const feature_image = page.featureImage;

  const feature_image_heading = feature_image.heading;

  const feature_image_paragraph = feature_image.paragraph;

  const feature_image_image = feature_image.image?.node.sourceUrl;

  const feature_image_image_alt = feature_image.image?.node.altText;

  const sub_feature_image = page.subFeatureImage;

  const sub_feature_image_image = sub_feature_image.image?.node.sourceUrl;

  const sub_feature_image_image_alt = sub_feature_image.image?.node.altText;

  const sub_feature_image_heading = sub_feature_image.heading;

  const sub_feature_image_sub_heading = sub_feature_image.subHeading;

  const sub_feature_image_bold = sub_feature_image.bold;

  const post_items = page.postItems;

  const post_items_heading = post_items.heading;

  const cta = page.cta;

  const cta_heading = cta.heading;

  const cta_bold = cta.bold;

  const cta_paragraph = cta.paragraph;

  const cta_button = cta.button;

  const form = page.form;

  const form_heading = form.heading;

  const form_paragraph = form.paragraph;

  const form_button = form.button;

  return {
    front: {
      title:  title, 
      header_paragraph: header_paragraph,
      header_first_carousel: header_first_carousel,
      header_first_carousel_alt: header_first_carousel_alt,
      header_second_carousel: header_second_carousel,
      header_second_carousel_alt: header_second_carousel_alt,
      header_third_carousel: header_third_carousel,
      header_third_carousel_alt: header_third_carousel_alt,
      introduction_heading: introduction_heading, 
      introduction_paragraph: introduction_paragraph,
      sub_introduction_heading: sub_introduction_heading,
      sub_introduction_paragraph: sub_introduction_paragraph,
      sub_introduction_image: sub_introduction_image,
      sub_introduction_image_alt: sub_introduction_image_alt,
      table_feature_heading: table_feature_heading,
      table_feature_sub_heading: table_feature_sub_heading,
      table_feature_image: table_feature_image,
      table_feature_image_alt: table_feature_image_alt,
      table_feature_paragraph: table_feature_paragraph,
      table_feature_firstColumn_heading: table_feature_firstColumn_heading,
      table_feature_firstColumn_firstRow: table_feature_firstColumn_firstRow,
      table_feature_firstColumn_secondRow: table_feature_firstColumn_secondRow,
      table_feature_firstColumn_thirdRow: table_feature_firstColumn_thirdRow,
      table_feature_firstColumn_fourthRow: table_feature_firstColumn_fourthRow,
      table_feature_secondColumn_heading: table_feature_secondColumn_heading,
      table_feature_secondColumn_firstRow: table_feature_secondColumn_firstRow,
      table_feature_secondColumn_secondRow: table_feature_secondColumn_secondRow,
      table_feature_secondColumn_thirdRow: table_feature_secondColumn_thirdRow,
      table_feature_secondColumn_fourthRow: table_feature_secondColumn_fourthRow,
      table_feature_thirdColumn_heading: table_feature_thirdColumn_heading,
      table_feature_thirdColumn_firstRow: table_feature_thirdColumn_firstRow,
      table_feature_thirdColumn_secondRow: table_feature_thirdColumn_secondRow,
      table_feature_thirdColumn_thirdRow: table_feature_thirdColumn_thirdRow,
      table_feature_thirdColumn_fourthRow: table_feature_thirdColumn_fourthRow,
      table_feature_firstTag_super_tag: table_feature_firstTag_super_tag,
      table_feature_firstTag_sub_tag: table_feature_firstTag_sub_tag,
      table_feature_secondTag_super_tag: table_feature_secondTag_super_tag,
      table_feature_secondTag_sub_tag: table_feature_secondTag_sub_tag,
      table_feature_thirdTag_super_tag: table_feature_thirdTag_super_tag,
      table_feature_thirdTag_sub_tag: table_feature_thirdTag_sub_tag,
      slider_paragraph: slider_paragraph,
      slider_first_image: slider_first_image,
      slider_first_image_alt: slider_first_image_alt,
      slider_second_image: slider_second_image,
      slider_second_image_alt: slider_second_image_alt,
      slider_third_image: slider_third_image,
      slider_third_image_alt: slider_third_image_alt,
      feature_image_heading: feature_image_heading,
      feature_image_paragraph: feature_image_paragraph,
      feature_image_image: feature_image_image,
      feature_image_image_alt: feature_image_image_alt,
      sub_feature_image_image: sub_feature_image_image,
      sub_feature_image_image_alt: sub_feature_image_image_alt,
      sub_feature_image_heading: sub_feature_image_heading,
      sub_feature_image_sub_heading: sub_feature_image_sub_heading,
      sub_feature_image_bold: sub_feature_image_bold,
      post_items_heading: post_items_heading,
      cta_heading: cta_heading,
      cta_bold: cta_bold,
      cta_paragraph: cta_paragraph,
      cta_button: cta_button,
      form_heading: form_heading,
      form_paragraph: form_paragraph,
      form_button: form_button,
    },
  };
};

const fields_authentication = (data) => {

  const page = data.authenticationPage;

  const title = page.title;

  const form_paragraph = page.formParagraph;

  const sign_in = page.signIn;

  const sign_up = page.signUp;

  const form_button = page.formButton;

  return {
    authentication: {
      title: title,
      form_paragraph: form_paragraph,
      sign_in: sign_in,
      sign_up: sign_up,
      form_button: form_button,
    },
  };
};

const fields_cart= (data) => {

  const page = data.cartPage;

  const title = page.title;

  const post_items = page.postItems;

  const post_items_heading = post_items.heading;

  const accordion = page.accordion;
  
  const first_accordian = accordion.firstAccordian;

  const first_accordian_heading = first_accordian.heading;

  const first_accordian_first_row = first_accordian.firstRow;

  const first_accordian_second_row = first_accordian.secondRow;

  const first_accordian_third_row = first_accordian.thirdRow;

  const second_accordian = accordion.secondAccordian;

  const second_accordian_heading = second_accordian.heading;

  const second_accordian_first_row = second_accordian.firstRow;

  const second_accordian_second_row = second_accordian.secondRow;

  const second_accordian_third_row = second_accordian.thirdRow;

  const third_accordian = accordion.thirdAccordian;

  const third_accordian_heading = third_accordian.heading;

  const third_accordian_first_row = third_accordian.firstRow;

  const third_accordian_second_row = third_accordian.secondRow;

  const third_accordian_third_row = third_accordian.thirdRow;

  const cta = page.cta;

  const cta_heading = cta.heading;

  const cta_bold = cta.bold;

  const cta_paragraph = cta.paragraph;

  const cta_button = cta.button;

  return {
    cart: {
      title: title,
      post_items_heading: post_items_heading,
      first_accordian_heading: first_accordian_heading,
      first_accordian_first_row: first_accordian_first_row,
      first_accordian_second_row: first_accordian_second_row,
      first_accordian_third_row: first_accordian_third_row,
      second_accordian_heading: second_accordian_heading,
      second_accordian_first_row: second_accordian_first_row,
      second_accordian_second_row: second_accordian_second_row,
      second_accordian_third_row: second_accordian_third_row,
      third_accordian_heading: third_accordian_heading,
      third_accordian_first_row: third_accordian_first_row,
      third_accordian_second_row: third_accordian_second_row,
      third_accordian_third_row: third_accordian_third_row,
      cta_heading: cta_heading,
      cta_bold: cta_bold,
      cta_paragraph: cta_paragraph,
      cta_button: cta_button,
    },
  };
};

const fields_slider_post = (data) => {

  const slider_arry = [];

  for (const index of data.nodes) {

    slider_arry.push({

        heading: index.postSliders.heading,
        bold: index.postSliders.bold,
        paragraph: index.postSliders.paragraph,
    });
  };

  return {slider: slider_arry};
};

const fields_cart_post = (data) => {

  const options_array = [];

  const items_obj = {};

  for (const [i, index] of data.nodes.entries()) {

    items_obj[`cart${i}`] = {
      image: index.postItems.image?.node.sourceUrl, 
      imageAlt: index.postItems.image?.node.altText, 
      name: index.postItems.heading,
      sub: index.postItems.subHeading,
      description: index.postItems.paragraph,
      button: index.postItems.button,
      value: index.postItems.value,
      ref: {
        value: `cart${i}`,
        label: index.postItems.heading,
      },
    }

    options_array.push({
      value: `cart${i}`,
      label: index.postItems.heading,
    });
  };

  return {
    items: items_obj,
    select: options_array,
  };
};

export const getFields = async () => {

  const query =`query site {
   pages {
      nodes {
        template {
          ... on Template_Options_page {
            options {
              footer {
                phone
                paragraph
                linkedin
                address
              }
              navigation {
                signOut
                signIn
                frontPage
                cartPage
              }
              logo {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    }
    pages {
      nodes {
        template {
          ... on Template_Front_page {
            frontPage {
              title
              header {
                paragraph
                firstCarousel {
                  node {
                    sourceUrl
                    altText
                  }
                }
                secondCarousel {
                  node {
                    sourceUrl
                    altText
                  }
                }
                thirdCarousel {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
              introduction {
                heading
                paragraph
              }
              subIntroduction {
                heading
                paragraph
                image {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
              tableFeature {
                heading
                subHeading
                image {
                  node {
                    sourceUrl
                    altText
                  }
                }
                paragraph
                firstColumn {
                  heading
                  firstRow
                  secondRow
                  thirdRow
                  fourthRow
                }
                secondColumn {
                  heading
                  firstRow
                  secondRow
                  thirdRow
                  fourthRow
                }
                thirdColumn {
                  heading
                  firstRow
                  secondRow
                  thirdRow
                  fourthRow
                }
                tags {
                  firstTag {
                    superTag
                    subTag
                  }
                  secondTag {
                    superTag
                    subTag
                  }
                  thirdTag {
                    superTag
                    subTag
                  }
                }
              }
              slider {
                paragraph
                firstImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
                secondImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
                thirdImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
              featureImage {
                heading
                paragraph
                image {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
              subFeatureImage {
                heading
                subHeading
                bold
                image {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }      
              postItems {
                heading
              }
              cta {
                heading
                bold
                paragraph
                button
              }
              form {
                heading
                paragraph
                button
              }
            }
          }
        }
      }
    }
    pages {
      nodes {
        template {
          ... on Template_Authentication_page {
            authenticationPage {
              title
              signUp
              signIn
              formButton
              formParagraph
            }
          }
        }
      }
    }
    pages {
      nodes {
        template {
          ... on Template_Cart_page {
            cartPage {
              title
              postItems {
                heading
              }
              accordion {
                firstAccordian {
                  heading
                  firstRow
                  secondRow
                  thirdRow
                }
                secondAccordian {
                  heading
                  firstRow
                  secondRow
                  thirdRow
                }
                thirdAccordian {
                  heading
                  thirdRow
                  secondRow
                  firstRow
                }
              }
              cta {
                heading
                bold
                paragraph
                button
              }
            }
          }
        }
      }
    }
    postSliders {
      nodes {
        postSliders {
          heading
          bold
          paragraph
        }
      }
    }
    postItems {
      nodes {
        postItems {
          image {
            node {
              altText
              sourceUrl
            }
          }
          heading
          subHeading
          paragraph
          button
          value
        }
      }
    }
  }`;

  try {

    const res = await fetch(`${process.env.REACT_APP_GRAPHQL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    })

    const json = await res.json();
    const fieldsOptions = await fields_options(json.data.pages.nodes[0].template);
    const fieldsAuthentication = await fields_authentication(json.data.pages.nodes[1].template);
    const fieldsCart = await fields_cart(json.data.pages.nodes[2].template);
    const fieldsFront = await fields_front(json.data.pages.nodes[3].template);
    const fieldsSliderPost = await fields_slider_post(json.data.postSliders);
    const fieldsCartPost = await fields_cart_post(json.data.postItems);
    const data = {...fieldsOptions, ...fieldsAuthentication, ...fieldsCart, ...fieldsFront, ...fieldsSliderPost, ...fieldsCartPost};

    return data;
  } catch (err) {

    console.log(err);

    return false;
  };
};
