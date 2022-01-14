using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1_TwoSum
{
    internal class Program
    {


        /*
        
        [Question]
        given an array of integers nums and an integer target,
        return indices of the two numbers such that they add up to target.
        you may assume that each input would have exactly one solution,
        and you may not use the same element twice.
        you can return the answer in any order.

        [Example 1]
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
         
        [Example 2]
        Input: nums = [3,2,4], target = 6
        Output: [1,2]

        [Example 3]
        Input: nums = [3,3], target = 6
        Output: [0,1]
        
         */
        public static void Main(string[] args)
        {
            var solution = new Solution();

            // Example 1
            int[] nums = { 2, 7, 11, 15 };
            int target = 9;
            int[] output = { 0, 1 };
            if ((solution.TwoSum(nums, target)).SequenceEqual(output))
            {
                Console.WriteLine("Accept");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Fail at Example 1");
                Console.ReadLine();
            }

        }


        // Actual User Answer
        public class Solution
        {
            public int[] TwoSum(int[] nums, int target)
            {
                for (int i = 0; i < nums.Length; i++)
                {
                    for (int j = 0; j < nums.Length; j++)
                    {
                        if (nums[i] + nums[j] == target && i != j)
                        {
                            int[] twoSum = { i, j };

                            return twoSum;
                        }
                    }
                }
                return null;
            }
        }
    }
}
