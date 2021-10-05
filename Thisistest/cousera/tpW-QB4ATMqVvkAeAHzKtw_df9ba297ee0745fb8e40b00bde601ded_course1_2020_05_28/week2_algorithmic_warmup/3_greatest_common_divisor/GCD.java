

import java.util.*;

public class GCD {
  private static int gcd_efficient(int a, int b) {
   if (b==0) {
	   return a;
    }

    return gcd_efficient( b, a%b) ;
  }

  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);
    int a = scanner.nextInt();
    int b = scanner.nextInt();

    System.out.println(gcd_efficient(a, b));
  }
}

