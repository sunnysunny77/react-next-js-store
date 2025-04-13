const EmptyResults = (results: any[]) => {
  if (!results.length) {
    return false;
  }
  return true;
}

export default EmptyResults;