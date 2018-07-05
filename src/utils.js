function timeDifference(current, previous) {
  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerMonth = millisecondsPerDay * 30;
  const millisecondsPerYear = millisecondsPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < millisecondsPerMinute / 3) {
    return "just now";
  } else if (elapsed < millisecondsPerMinute) {
    return "less than 1 min ago";
  } else if (elapsed < millisecondsPerHour) {
    return Math.round(elapsed / millisecondsPerMinute) + " min ago";
  } else if (elapsed < millisecondsPerDay) {
    return Math.round(elapsed / millisecondsPerHour) + " h ago";
  } else if (elapsed < millisecondsPerMonth) {
    return Math.round(elapsed / millisecondsPerDay) + " days ago";
  } else if (elapsed < millisecondsPerYear) {
    return Math.round(elapsed / millisecondsPerMonth) + " mo ago";
  } else {
    return Math.round(elapsed / millisecondsPerYear) + " years ago";
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDifference(now, updated);
}
