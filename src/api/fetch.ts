type ResultProps = {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
};

type ResponseProps = {
  result?: ResultProps;
  error?: string;
};

async function shortenAPI(url: string): Promise<{ response?: ResponseProps; message?: string; error?: Error }> {
  try {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error);
      });
    return { response: result };
  } catch (error) {
    return { message: 'an error occurred', error };
  }
}

export default shortenAPI;
