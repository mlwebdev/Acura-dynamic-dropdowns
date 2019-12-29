var year_sel = year_select.value;
  // document.write("Entering switch block<br />");
  switch (year_sel) {
      case (year_sel <= 2000): document.write("Good job<br />");
      break;
  
      case (year_sel <= 2000): document.write("Pretty good<br />");
      break;
  
      case 'C': document.write("Passed<br />");
      break;
  
      case 'D': document.write("Not so good<br />");
      break;
  
      case 'F': document.write("Failed<br />");
      break;
  
      default:  document.write("Unknown grade<br />")
  }
  document.write("Exiting switch block");