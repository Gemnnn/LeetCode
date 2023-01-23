using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9_PalindromeNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var solution = new Solution();

            // Example 1
            int x = 1000021;
            if (solution.IsPalindrome(x))
            {
                Console.WriteLine("");
            }
            Console.WriteLine(solution.IsPalindrome(x));
            Console.ReadLine();

            // Example 2
            //int x = -121;
            Console.WriteLine(solution.IsPalindrome(x));

            // Example 3
            //int x = 10;


        }

        public class Solution
        {
            public bool IsPalindrome(int x)
            {
                if (x < 0)
                {
                    return false;
                }
                else
                {
                    int firstDigit = x;
                    while (firstDigit >= 10)
                        firstDigit /= 10;

                    int lastDigit = x % 10;

                    if (firstDigit == lastDigit)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }
    }
}
